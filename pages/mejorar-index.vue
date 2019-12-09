<template>
  <div>
    <WelcomeTemplate>
      <template slot="upper">
        <Logo></Logo>
      </template>
      <template slot="mid">
        <WelcomeMessage></WelcomeMessage>
      </template>
      <template slot="lower">
        <LoginInteraction></LoginInteraction>
      </template>
    </WelcomeTemplate>
  </div>
</template>

<script>
import Logo from '~/components/molecules/Logo'
import WelcomeMessage from '~/components/molecules/WelcomeMessage'
import LoginInteraction from '~/components/molecules/LoginInteraction'
import WelcomeTemplate from '~/components/templates/WelcomeTemplate'
export default {
  components: { Logo, WelcomeMessage, LoginInteraction, WelcomeTemplate },
  data() {
    return {
      tab: null
    }
  },
  layout: 'withoutNavigationBar'
}
</script>

<style scoped lang="scss"></style>
