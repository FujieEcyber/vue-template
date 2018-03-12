## quick start

APIで取得したWEBサイト一覧を画面に表示する

### 前準備

1. テンプレートをひっぱってくる

  https://github.com/FujieEcyber/vue-template

2. nodeJSインストールしていなければインストール

3. 引っ張ってきたディレクトリに対してnpm install

4. npm run build コマンドで distの中にapp.jsが生成されていればOK

5. setting.jsにapiのURL記述しておく


### コンポーネントの<template></template>を作成

vue/components/top/Top.vue

```
<div class="website-area">
  <div class="inner">
    <h2>WEBサイト</h2>
    <ul class="website-list">
      <li>ここにサイトを読み込む</li>
    </ul>
  </div>
</div>
```

上記をパーツとして分解して新しいvueファイルを作成


vue/components/top/modules/TopWebsite.vue

#### テンプレートを記述

```
<template>
  <div class="website-area">
    <div class="inner">
      <h2>WEBサイト</h2>
        <ul class="website-list">
          <li>ここにサイトを読み込む</li>
        </ul>
    </div>
  </div>
</template>

```

#### 名前を付けてエクスポートする

```
<script>
export default {
  name: 'topWebsite'
}
</script>
```

#### Top.vue に作成したコンポーネントを記述

```
<div>
  <div class="content-wrap">
    <main class="main">
      <TopWebsite></TopWebsite>
    </main>
  </div>
</div>
```

スクリプト側にコンポーネントのインポートを記載する

```
<script>
import TopWebsite from './modules/TopWebsite.vue'

export default {
  name: 'top',
  components: {
    TopWebsite,
  }
}
</script>
```

### router.jsを記載

名前とコンポーネント名を指定
パス「/」へアクセスされた時にTopのコンポーネントを表示できるようにする

```
routes: [
  {
    path: '/',
    name: 'routeTop',
    component: Top
  }
]
```

### store内にjsを記載

store/top/index.js

#### stateを記載

サイト一覧を取得した際の情報を入れるもの

```
state: {
    sites: []
}
```

#### gettersを記載

コンポーネントからゲットする際のメソッド

```
getters: {
    getSitesGetter (state, getters,rootState) {
        return state.sites
    }
}
```

#### actionsを記載

API処理

```
actions: {
   getSitesAction ({ commit }) {
     request
      .get(SETTING.API_URL + '/sites')
      .set('Content-Type', 'application/json;charset=UTF-8')
      .accept('application/json;charset=UTF-8')
      .then(response => {
        //console.log(response)
        if (response.status === 200) {
          commit('getSitesMutation', response)
        }
      })
   }
},
```

#### mutationsを記載

API処理で取得した情報をstateへ渡す

```
mutations: {
    getSitesMutation(state, response){
        state.sites = response.body.sites
    }
},
```



### storeで記述したgetterとactionをコンポーネント側から呼び出す

components/top/modukes/TopWebsite.vue

```
<script>
import TopWebsite from './modules/TopWebsite.vue'
import { mapGetters,mapActions } from 'vuex'

export default {
  name: 'topWebsite',
  computed: {
     ...mapGetters('storeTopWebsite', {
       'sites': 'getSitesGetter'
     })
   },
   methods: {
     ...mapActions('storeTopWebsite',[
       'getSitesAction',
     ])
   },
   mounted: function () {
     this.getSitesAction()
   }
}
</script>
```

呼び出した状態をテンプレートに描画

```
<ul class="website-list">
  <li v-for="(site,index) in sites">
    {{ site.name }}
  </li>
</ul>
```

### ビルド

```
npm run build
```

### index.jsをブラウザで確認

サイトを取得できていることを確認

## 完成版の確認

completeディレクトリ内に完成した状態がありますので、参照してください。
