<template>
  <div>
    <v-flex class="fabup-center">
      <Title class="fabup-title-font">Welcome</Title>
      <Paragraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit
        tenetur animi nobis consectetur suscipit provident dicta ratione aliquam
        cupiditate veniam nisi, quis numquam ipsa neque rem veritatis velit.
        Temporibus, architecto!
      </Paragraph>
    </v-flex>
  </div>
</template>

<script>
import Title from '~/components/atoms/Title'
import Paragraph from '~/components/atoms/Paragraph'

export default {
  components: { Title, Paragraph }
}
</script>

<style lang="scss" scoped>
@import '~/assets/variables.scss';
</style>
