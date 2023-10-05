const txtAnim = document.querySelector('#text');

new Typewriter(txtAnim, {
    deleteSpeed:20,
    loop:true
})
.typeString('automaticien')
.pauseFor(500)
.deleteChars(12)
.typeString('développeur web')
.pauseFor(1000)
.deleteChars(4)
.typeString(' en système embarquée')
.pauseFor(1000)
.deleteChars(32)
.typeString('roboticien')
.pauseFor(500)
.deleteChars(10)
.start()
