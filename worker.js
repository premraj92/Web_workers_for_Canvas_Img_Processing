onmessage = (canvasImgDataInput) => {
    console.log('Message received from main script', canvasImgDataInput)
    const canvasImgData = canvasImgDataInput.data
    
    for(let y=0; y < canvasImgData.height; y++) {
        for (let x=0; x < canvasImgData.width ;x++) {
            const index = (x + (y * canvasImgData.width)) * 4

            canvasImgData.data[index] = canvasImgData.data[index] * 1.9
            // canvasImgData.data[index + 3] = 50
        }
    }

    console.log('Posting message back to main script')
    
    // postMessage(canvasImgData)
    
    // // we should always use the below way to transfer the Image Buffers i.e. instead of making a new copy of image & sending it to worker thread we are sharing the current image location & control from Main/UI thread to Worker thread the above line where we just send plain object via worker.postMessage(canvasImgData) will copy the image & send it

    postMessage(canvasImgData, [canvasImgData.data.buffer])

}