# 001
為什麼 `createBirdAtRegularIntervals` 的第9行使用 console.log，`lmgList` 總是為空 ?，而使用 `useEffect` 的第14行可以正常顯示更新後的值。
```javascript{1}
function createBirdAtRegularIntervals() {
    console.log("createBirdAtRegularIntervals");

    setImgList(prevImgList => {
        const updatedImgList = [...prevImgList, BirdImage(prevImgList.length)];
        return updatedImgList;
    })

    const interval = randomTime(1000, 2000);
    setTimeout(createBirdAtRegularIntervals, interval);
    
    console.log(imgList)
}

useEffect(() => {
    console.log("effect")
    console.log(imgList);
}, [imgList]);
```
