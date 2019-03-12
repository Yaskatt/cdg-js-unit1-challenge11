// モーダル要素の取得
const modal = document.getElementById('easyModal');

// 開くボタン取得
const openBtn = document.getElementById('modalOpen');

// 閉じるボタン取得
const closeBtn = document.getElementsByClassName('modalClose');

// クリックで開くイベントリスナー
openBtn.addEventListener('click', openModal);

// クリックで閉じるイベントリスナー
closeBtn[0].addEventListener('click', closeModal);

// モーダル以外の場所クリックのイベントリスナー
document.addEventListener('click', event => {
  if(event.target === modal) {
    closeModal();
  }
});


// モーダルオープンの関数
function openModal() {
  modal.style.display = 'block';
}

// モーダルを閉じる関数
function closeModal() {
  modal.style.display = 'none';
}

// モーダル以外がクリックされた時に閉じる関数
