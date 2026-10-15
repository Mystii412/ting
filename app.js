const storyImage = document.getElementById('fortnite')
const storyText = document.getElementById('StoryText')
const storybtn1 = document.getElementById('btn1')
const storybtn2 = document.getElementById('btn2')

let story = {
    step1 : {
        img:'image.jpg',
        text: 'yo hank watch out',
        btn1:{text:'fornite', step: 'step2'},
        btn2:{text:'not fortni', step: 'step3'}
    },
    step2:{
        img: 'image2.png',
        text: 'bro hank i said watch out',
        btn1: {text:'im sorry', step:'step4'},
        btn2: {text:'okay', step: 'step5'}
    },
    step3:{
        img: 'image2.5.png',
        text: 'hoogd jb'
    },
    step4:{
        img: 'image5.png',
        text: 'good'
    },
    step5:{
        img: 'image3.png',
        text:'holy guac'
    }
}

let currentStep = 'step1'

LoadScene();

function LoadScene(){
    storyImage.src = story[currentStep].img
    storyText.innerHTML = story[currentStep].text;
    if(story[currentStep].btn1 == undefined){
        document.getElementById('ButtonDiv').classList.add('hidden')
    }else{
        storybtn1.innerHTML = story[currentStep].btn1.text
        storybtn2.innerHTML = story[currentStep].btn2.text
    }
}

document.getElementById('btn1').addEventListener('click', function(){
    // alert('you clicked btnt 11111111111')
    currentStep = story[currentStep].btn1.step
    LoadScene()
})
document.getElementById('btn2').addEventListener('click', function(){
    // alert('you clicked btnt 11111111112')
    currentStep = story[currentStep].btn2.step
    LoadScene()
})
