(function () {
  document.addEventListener("turbolinks:load", function() {
    let sliderImages = document.querySelectorAll('.image-slider img');
    let currentIndex1 = 0;  // 1つ目の画像のインデックス
    let currentIndex2 = 1;  // 2つ目の画像のインデックス
    
    // 画像ごとの背景色を定義
    let backgroundColors = [
        '#E1A679', // 豚骨
        '#52433D', // 魚介
        '#CB4042', // 醤油
        '#6699A1', // 塩
        '#E9CD4C', // 次郎
        '#877F6C',  // その他
        '#E1A679', // 豚骨
        '#52433D', // 魚介
        '#CB4042', // 醤油
        '#6699A1', // 塩
        '#E9CD4C', // 次郎
        '#877F6C'  // その他
        // 他の背景色もここに追加可能
    ];
    
    // 画像ごとの位置を定義
    let imagePositions = [
        { top: '280px', left: '400px' },
        { top: '280px', left: '800px' },
        { top: '280px', left: '400px' },
        { top: '280px', left: '800px' },
        { top: '280px', left: '400px' },
        { top: '280px', left: '800px' },
        { top: '280px', left: '400px' },
        { top: '280px', left: '800px' },
        { top: '280px', left: '400px' },
        { top: '280px', left: '800px' },
        { top: '280px', left: '400px' },
        { top: '280px', left: '800px' }
        // 他のロゴの位置もここに追加可能
    ];
    
        
    // 新しい2つの画像、背景色、位置を設定
    updateImageDisplay(sliderImages,backgroundColors, imagePositions, currentIndex1);
    updateImageDisplay(sliderImages,backgroundColors, imagePositions, currentIndex2);
    
    setInterval(() => {
        // 現在の2つの画像を非表示
        sliderImages[currentIndex1].style.opacity = '0';
        sliderImages[currentIndex2].style.opacity = '0';
        
        // インデックスを増やして2つの新しい画像を選択
    
        console.log((currentIndex1 + 2) % sliderImages.length)
        console.log(sliderImages.length)
        console.log((currentIndex2 + 2) % sliderImages.length)
        console.log(sliderImages.length)
        currentIndex1 = (currentIndex1 + 2) % (sliderImages.length -1);
        currentIndex2 = (currentIndex2 + 2) % (sliderImages.length -1);
    }, 5000);    
  });
  
// 最初の画像と背景色を表示
  function updateImageDisplay(sliderImages,backgroundColors, imagePositions, index) {
    console.log(sliderImages[index])
    sliderImages[index].style.opacity = '1';
    document.body.style.backgroundColor = backgroundColors[index];
    sliderImages[index].style.top = imagePositions[index].top;
    sliderImages[index].style.left = imagePositions[index].left;
  }
})();