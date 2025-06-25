<script>
  export let variant = 'primary'; // primary, secondary, accent
  export let size = 'md'; // sm, md, lg
  export let fullWidth = false;
  export let disabled = false;
  
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-10 py-4 text-lg'
  };
  
  const baseClasses = variants[variant];
  const sizeClasses = sizes[size];
  const widthClasses = fullWidth ? 'w-full' : '';
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  $: classes = `${baseClasses} ${sizeClasses} ${widthClasses} ${disabledClasses}`;
</script>

<button 
  class={classes}
  {disabled}
  on:click
  {...$$restProps}
>
  <slot />
</button> 