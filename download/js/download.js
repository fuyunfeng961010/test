window.onload = function () {
  // 所有操作节点获取
  let edition = document.getElementById('edition');
  let recordModal = document.getElementById('record-modal');
  let headerClose = document.getElementById('header-close');
  let close = document.getElementById('close');
  let ios = document.getElementById('ios');
  let android = document.getElementById('android');
  let versionList = document.getElementById('version-list');
  // 节点事件添加
  edition.onclick = function () {
    recordModal.style.display = 'flex';
  };
  headerClose.onclick = function () {
    recordModal.style.display = 'none';
  };
  close.onclick = function () {
    recordModal.style.display = 'none';
  };
  // 最新版本获取展示
  let lastVersion = editionData[0];
  let lastCharacter = '';
  for (let index = 0; index < lastVersion.character.length; index++) {
    lastCharacter += `<li>${lastVersion.character[index]}</li>`
  }
  lastCharacter = `<ul class="add-characteristic">${lastCharacter}</ul>`
  let iosInner = `<div class="ios-title">iOS</div>
                  <div class="new-edition">
                    <span>${lastVersion.versions}</span>
                    <span>${lastVersion.date}</span>
                  </div>
                  <div class="add-title">新特性：</div>${lastCharacter}`;
  let androidInner = `<div class="android-title">Android</div>
                      <div class="new-edition">
                        <span>${lastVersion.versions}</span>
                        <span>${lastVersion.date}</span>
                      </div>
                      <div class="add-title">新特性：</div>${lastCharacter}`;
  ios.innerHTML = iosInner;
  android.innerHTML = androidInner;
  // 版本记录
  let listInner = '';
  for (let index = 0; index < editionData.length; index++) {
    let data = editionData[index];
    let character = editionData[index].character;
    let characterInner = '';
    for (let j = 0; j < character.length; j++) {
      characterInner += `<li>${character[j]}</li>`;
    }
    listInner += `<li>
                  <div class="item-title">iOS</div>
                  <div class="item-edition">
                    <span>${data.versions}</span>
                    <span>${data.date}</span>
                  </div>
                  <div class="item-add-title">新特性：</div>
                  <ul class="item-add-characteristic">
                    ${characterInner}
                  </ul>
                </li>
                <li>
                  <div class="item-title">Android</div>
                  <div class="item-edition">
                    <span>${data.versions}</span>
                    <span>${data.date}</span>
                  </div>
                  <div class="item-add-title">新特性：</div>
                  <ul class="item-add-characteristic">
                    ${characterInner}
                  </ul>
                </li>`;
    versionList.innerHTML = listInner;
  }
}