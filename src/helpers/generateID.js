export default function() {
  var str = function() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1)
  }
  return (str()+str()+"-"+str()+"-"+str()+"-"+str()+"-"+str()+str()+str())
}
