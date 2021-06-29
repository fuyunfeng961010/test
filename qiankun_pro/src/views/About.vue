<template>
  <div class="about">
    <h1 @click="request">This is an about page</h1>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'About',
  methods: {
    request() {
      axios({
        url: 'https://portal.fuyunfeng.top/api/test',
        // url: 'http://47.117.135.194:9001/test'
        // url: 'http://sq.deepq.tech:7777/api/h5-position/position-index?positionId=',
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6ImNiYzQxODE5LTYxNGUtNDdhMy1iZTA2LWQ0ZDZmNjQ1N2FkMiJ9.-0FRqbwlI1YQ-SaQ6tyQ8hNwaZRvVe-JmlGcBe5YqwvrU-qodDJTeBaUBTV4OjLgpyMnLFLJo6iDKXB-lNzLeA'
        }
      })
      .then(res => {
        console.log('res', res)
      })
    }
  }
}
</script>
