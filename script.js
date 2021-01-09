const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// 

async function catchMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
        
    }catch(error){
        console.log('whoops');
    }
}

button.addEventListener('click',async () => {
    await videoElement.requestPictureInPicture();
    
});

catchMediaStream();