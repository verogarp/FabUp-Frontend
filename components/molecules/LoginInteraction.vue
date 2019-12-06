<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <Button>Sign In</Button>
        </v-col>
        <v-col>
          <Button>Sign Up</Button>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <FLink>Forgot your password?</FLink>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Button from '~/components/atoms/Button'
import FLink from '~/components/atoms/FLink'

export default {
  components: { Button, FLink }
}
</script>

<style lang="scss" scoped></style>
