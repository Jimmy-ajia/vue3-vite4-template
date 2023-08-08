/**
 * websocket 封装
 * @param {string} config.url  - websocket链接路径，必要参数
 * @param {number} [config.retry] - 重连次数，默认无限次重连直到连接成功
 * @param {number} [config.reconnectWait]  - 重连等待时间，默认5秒
 * @param {number} [config.heartBeatWait]  - 心跳时间，默认1分钟
 * @param {string} [config.heartMsg]  - 心跳信息
 * @param {boolean} [config.isHeartBeat]  - 是否开启心跳，默认开启
 *
 */
export default class Socket {
    constructor (config) {
      if (!config.url) {
        throw new Error('websocket url is invalid')
      }
      this.reconnectTimer = null
      this.heartbeatTimer = null
      this.isAlive = false
      this.config = {
        url: '',
        retry: 10,
        reconnectWait: 5 * 1000,
        heartBeatWait: 6 * 1000,
        heartMsg: 'test',
        isHeartBeat: false
      }
      Object.keys(config).forEach(key => {
        this.config[key] = config[key]
      })
      this.watcher = []
      this.init()
    }

    init () {
      this.socket = new WebSocket(this.config.url)

      this.socket.onerror = (e) => {
        this.reconnect()
        this.isAlive = false
        typeof this.config.onerror === 'function' && this.config.onerror(e)
      }

      this.socket.onmessage = ({ data }) => {
        const res = data.indexOf('{') > -1 ? JSON.parse(data) : data
        typeof this.config.onmessage === 'function' && this.config.onmessage(res)

        this.watcher.forEach(fn =>{fn(res)})
        this.watcher =[]
      }

      this.socket.onclose = (e) => {
        this.isAlive = false
        console.info('websocket was closed')
        typeof this.config.onclose === 'function' && this.config.onclose(e)
      }

      this.socket.onopen = (e) => {
        console.info('websocket was opened')
        this.isAlive = true
        if (this.config.isHeartBeat) {
          this.startHeart()
        }
        typeof this.config.onopen === 'function' && this.config.onopen(e)
      }
    }

    send (data) {
      if (!this.isAlive) return
      const text = typeof data === 'string' ? data : JSON.stringify(data)
      this.socket.send(text)

      return this
    }

    onEnd(fn){
      typeof fn === "function" && this.watcher.push(fn)
    }

    reconnect () {
      this.reconnectTimer = setTimeout(() => {
        if (this.config.retry > 0) {
          this.config.retry--
          this.init()
        }
      }, this.config.reconnectWait)
    }
    close(){
      this.socket.close()
    }

    startHeart () {
      this.heartbeatTimer = setInterval(() => {
        this.send(this.config.heartMsg)
      }, this.config.heartBeatWait)
    }
  }

  /* eg:
import Socket from '/path/websocket'
const websocket = new Socket({
        url: 'your ws url',
        onerror: (e) => {
          console.log(e)
        },
        onmessage: (data) => {
          console.log(data)
        }
      })
websocket.send('666')


 */
