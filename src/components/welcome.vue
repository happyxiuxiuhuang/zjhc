<template>
<div>
    <h1>欢迎你的到来</h1>
    {{username}}

    {{ $route.params.username}}
</div>
</template>

<script>
export default {
    props:['username']
}
</script>