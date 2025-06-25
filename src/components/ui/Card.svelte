<script>
  export let hover = true;
  export let glow = false;
  export let padding = 'p-6';
  
  const baseClasses = 'card';
  const hoverClasses = hover ? 'group hover:bg-cubic-800/50 transition-all duration-300' : '';
  const glowClasses = glow ? 'glow' : '';
  
  $: classes = `${baseClasses} ${hoverClasses} ${glowClasses} ${padding}`;
</script>

<div class={classes}>
  <slot />
</div> 