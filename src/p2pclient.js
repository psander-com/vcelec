var io = require('socket.io-client')

const socket = io.connect("localhost:3000", {reconnect: true});
console.log(socket);
socket.on('connect', () => {
  console.log(socket.id); // 'G5p5...'
});

// var Socketiop2p = require('socket.io-p2p')
// var io = require('socket.io-client')
//
// var socket = io();
// var p2p = new Socketiop2p(socket);
//
// p2p.on('ready', function(){
//   p2p.usePeerConnection = true;
//   p2p.emit('peer-obj', { peerId: peerId });
// });
//
// p2p.on('peer-msg', function(data){
//   console.log(data);
// });
//   var opts = {peerOpts: {trickle: false}, autoUpgrade: false}
//   // var p2psocket = new Socketiop2p(socket, opts, function () {
//   //   privateButton.disabled = false
//   //   p2psocket.emit('peer-obj', 'Hello there. I am ' + p2psocket.peerId)
//   // })
//
//   var p2psocket = new Socketiop2p(socket);
//
//   // Elements
//   var privateButton = document.getElementById('private')
//   var form = document.getElementById('msg-form')
//   var box = document.getElementById('msg-box')
//   var boxFile = document.getElementById('msg-file')
//   var msgList = document.getElementById('msg-list')
//   var upgradeMsg = document.getElementById('upgrade-msg')
//
//   p2psocket.on('ready', () => {
//     p2psocket.usePeerConnection = true;
//     p2psocket.emit('peer-obj', { peerId: p2psocket.peerId });
//   });
//
//   p2psocket.on('peer-msg', function (data) {
//     var li = document.createElement('li')
//     li.appendChild(document.createTextNode(data.textVal))
//     msgList.appendChild(li)
//   })
//
//   p2psocket.on('peer-file', function (data) {
//     var li = document.createElement('li')
//     var fileBytes = new Uint8Array(data.file)
//     var blob = new window.Blob([fileBytes], {type: 'image/jpeg'})
//     var urlCreator = window.URL || window.webkitURL
//     var fileUrl = urlCreator.createObjectURL(blob)
//     var a = document.createElement('a')
//     var linkText = document.createTextNode('New file')
//     a.href = fileUrl
//     a.appendChild(linkText)
//     li.appendChild(a)
//     msgList.appendChild(li)
//   })
//
//   form.addEventListener('submit', function (e, d) {
//     e.preventDefault()
//     var li = document.createElement('li')
//     li.appendChild(document.createTextNode(box.value))
//     msgList.appendChild(li)
//     if (boxFile.value !== '') {
//       var reader = new window.FileReader()
//       reader.onload = function (evnt) {
//         p2psocket.emit('peer-file', {file: evnt.target.result})
//       }
//       reader.onerror = function (err) {
//         console.error('Error while reading file', err)
//       }
//       reader.readAsArrayBuffer(boxFile.files[0])
//     } else {
//       p2psocket.emit('peer-msg', {textVal: box.value})
//     }
//     box.value = ''
//     boxFile.value = ''
//   })
//
//   privateButton.addEventListener('click', function (e) {
//     goPrivate()
//     p2psocket.emit('go-private', true)
//   })
//
//   p2psocket.on('go-private', function () {
//     goPrivate()
//   })
//
//   function goPrivate () {
//     p2psocket.useSockets = false
//     upgradeMsg.innerHTML = 'WebRTC connection established!'
//     privateButton.disabled = true
//   }
