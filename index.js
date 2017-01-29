function RoutingTableReq (deviceId, flowId, dnrLinks){
  this.deviceId = deviceId
  this.flowId = flowId
  this.dnrLinks = dnrLinks

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
    return this
  }
}

function RoutingTableRes (){
  this.set = function (link, action){
    this[link] = action
  }

  this.fromString = function (str){
    let obj = JSON.stringify(str)
    for (let k in obj){
      this[k] = obj[k]
    }
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
  RoutingTableReq: RoutingTableReq,
  RoutingTableRes: RoutingTableRes
}