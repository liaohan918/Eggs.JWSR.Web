<template>
	<div>
		<div desktop=12 tablet=8>
			<dl>
				<dt>登录成功</dt>
				<dt>即将跳转回首页</dt>
			</dl>
		</div>
	</div>
</template>

<script>
	import applicationUserManager from '../auth/applicationusermanager'

	export default {
		name: 'logincallback-view',
		data() {
			return {}
		},
		async created() {
			try {
				await applicationUserManager.signinRedirectCallback()
				let user = await applicationUserManager.getUser()
				this.$store.commit("saveToken", user.access_token);
				window.localStorage.setItem("USER_NAME", user.profile.name);
				this.$router.push({
					name: 'Home'
				})
			} catch (e) {
				console.log(e)
				this.$root.$emit('show-snackbar', {
					message: e
				})
			}
		}
	}
</script>

<style>

</style>
