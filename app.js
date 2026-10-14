const storyImage = document.getElementById('fortnite')
const storyText = document.getElementById('StoryText')
const storybtn1 = document.getElementById('btn1')
const storybtn2 = document.getElementById('btn2')

let story = {
    step1 : {
        img:'image.jpg',
        text: 'yo hank watch out',
        btn1:'fornite',
        btn2:'not fortni'
    },
    step2:{
        img: 'image.jpg',
        text: 'bro hank i said watch out',
        btn1: 'im sorry',
        btn2: 'okay'
    },
    step3:{
        img: 'image.jpg',
        text: 'hoogd jb'
    }
}

let currentStep = 'step1'

storyImage.src = story[currentStep].img;
storyText.innerHTML = story[currentStep].text;
storybtn1.innerHTML = story[currentStep].btn1;
storybtn2.innerHTML = story[currentStep].btn2;

document.getElementById('btn1').addEventListener('click', function(){
    // alert('you clicked btnt 11111111111')
})
document.getElementById('btn2').addEventListener('click', function(){
    // alert('you clicked btnt 11111111112')
})
