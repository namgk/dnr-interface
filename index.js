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
    RECEIVE_REDIRECT : 4
  },
  DnrSyncReq: DnrSyncReq,
  DnrSyncRes: DnrSyncRes,

  TOPIC_DNR_HB: 'dnr_hb',
  TOPIC_REGISTER: 'register',
  TOPIC_REGISTER_ACK: 'register_ack',
  TOPIC_DNR_SYN_REQ: 'dnr_sync_req',
  TOPIC_DNR_SYN_RES: 'dnr_sync_res',
  TOPIC_DNR_SYN_RESS: 'dnr_sync_ress',
  TOPIC_FLOW_DEPLOYED: 'flow_deployed'
}

