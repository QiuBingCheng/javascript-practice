function createBirdAtRegularIntervals() {
    setImgList(prevImgList => {
        const updatedImgList = [...prevImgList, BirdImage(prevImgList.length)];
        return updatedImgList;
    })

    const interval = randomTime(1000, 2000);
    setTimeout(createBirdAtRegularIntervals, interval);
    console.log(imgList)

}

useEffect(() => {
    console.log(imgList);
}, [imgList]);

