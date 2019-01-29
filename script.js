const messages = [
  'msg-1',
  'msg-2',
  'msg-3',
  'msg-4',
  'msg-5',
  'msg-6',
  'msg-7',
  'msg-8',
  'msg-9',
  'msg-10',
  'msg-11',
  'msg-12',
  'msg-13',
  'msg-14'
]

let count = -1
window.addEventListener('click', e => {
  count++
  document.getElementById(messages[count]).style.display = 'flex'
})