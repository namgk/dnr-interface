function DnrSyncReq (deviceId, flowId, dnrLinks, contributingNodes){
  this.deviceId = deviceId
  this.flowId = flowId
  this.dnrLinks = dnrLinks
  this.contributingNodes = contributingNodes

  this.toString = function (){
    return JSON.stringify(this)
  }

  this.fromString = function (str){
    let obj = JSON.stringify(str)
    return this.fromObj(obj)
  }

  this.fromObj = function(obj){
    this.deviceId = obj.deviceId
    this.flowId = obj.flowId
    this.dnrLinks = obj.dnrLinks
    this.contributingNodes = obj.contributingNodes
    return this
  }
}

function DnrSyncRes (dnrLinks, brokers){
  this.dnrLinks = dnrLinks
  this.brokers = brokers

  this.toString = function (){
    return JSON.stringify(this)
  }

  this.fromString = function (str){
    let obj = JSON.stringify(str)
    return this.fromObj(obj)
  }

  this.fromObj = function (obj){
    this.dnrLinks = obj.dnrLinks
    this.brokers = obj.brokers
    return this
  }
}

module.exports = {
  Context: {
    NORMAL : 1,
    DROP : 2,
    FETCH_FORWARD : 3,
    RECEIVE_REDIRECT : 4,
    COPY_FETCH_FORWARD: 5,
    RECEIVE_REDIRECT_COPY: 6
  },
  DnrSyncReq: DnrSyncReq,
  DnrSyncRes: DnrSyncRes,

  TOPIC_DNR_HB: 'TOPIC_DNR_HB',
  TOPIC_REGISTER: 'TOPIC_REGISTER',
  TOPIC_REGISTER_REQ: 'TOPIC_REGISTER_REQ',
  TOPIC_REGISTER_ACK: 'TOPIC_REGISTER_ACK',
  TOPIC_DNR_SYN_REQ: 'TOPIC_DNR_SYN_REQ',
  TOPIC_DNR_SYN_RES: 'TOPIC_DNR_SYN_RES',
  TOPIC_DNR_SYN_RESS: 'TOPIC_DNR_SYN_RESS',
  TOPIC_FLOW_DEPLOYED: 'TOPIC_FLOW_DEPLOYED',
  TOPIC_MODULE_INSTALLING: 'TOPIC_MODULE_INSTALLING',
  TOPIC_MODULE_INSTALLED: 'TOPIC_MODULE_INSTALLED',
  TOPIC_MODULE_INSTALL_FAILED: 'TOPIC_MODULE_INSTALL_FAILED',
  TOPIC_MODULE_DELETED: 'TOPIC_MODULE_DELETED',
  TOPIC_MODULE_UPDATED: 'TOPIC_MODULE_UPDATED',
  MQTT_WS_PATH: '/mqttws'
}

