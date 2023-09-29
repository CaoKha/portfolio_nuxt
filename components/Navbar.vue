<template>
  <el-affix>
    <div class="font-sans antialiased" id="app">
      <nav class="flex items-center justify-between flex-wrap bg-[#212121] p-6">
        <div class="flex items-center flex-no-shrink text-white mr-6">
          <NuxtLink to="/">
          <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            width="30px" height="30px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
            <g>
              <path fill="#F9EBB2" d="M56,56H8v-1.07l12-6.855V32c0-7.496,4.492-15.586,12-21.992C39.508,16.414,44,24.504,44,32v16.074
		l11.824,6.754c0.062,0.039,0.121,0.078,0.176,0.117V56z" />
              <g>
                <path fill="#394240" d="M60,48l-8-4.57c0-4.027,0-8.047,0-11.43c0-12-8-24-20-32C20,8,12,20,12,32c0,3.383,0,7.402,0,11.43L4,48
			c-2.426,1.27-4,2.977-4,5.188V60c0,2.211,1.789,4,4,4h56c2.211,0,4-1.789,4-4v-6.812C64,50.977,62.125,49.375,60,48z M56,56H8
			v-1.07l12-6.855V32c0-7.496,4.492-15.586,12-21.992C39.508,16.414,44,24.504,44,32v16.074l11.824,6.754
			c0.062,0.039,0.121,0.078,0.176,0.117V56z" />
                <circle fill="#394240" cx="32" cy="28" r="4" />
              </g>
            </g>
          </svg>
          </NuxtLink>
          <span class="font-semibold text-xl tracking-tight"></span>
        </div>
        <div class="block sm:hidden">
          <button @click="toggle"
            class="flex items-center px-3 py-2 border-2 rounded text-gray-500 border-gray-500 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div :class="open ? 'block' : 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
          <div class="text-base font-bold sm:flex-grow">
            <NuxtLink to="/portfolio"
              class="no-underline block mt-4 text-right sm:inline-block sm:mt-0 sm:mr-4 text-gray-500 hover:text-white">
              Portfolio
            </NuxtLink>
            <NuxtLink to="/projects"
              class="no-underline block mt-4 text-right sm:inline-block sm:mt-0 sm:mr-4 text-gray-500 hover:text-white">
              Projects
            </NuxtLink>
            <NuxtLink to="/blogs"
              class="no-underline block mt-4 text-right sm:inline-block sm:mt-0 text-gray-500 hover:text-white">
              Blogs
            </NuxtLink>
          </div>
          <!-- <div> -->
          <!--   <a href="#" -->
          <!--     class="no-underline inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 sm:mt-0">Download</a> -->
          <!-- </div> -->
        </div>
      </nav>
    </div>
  </el-affix>
  <el-backtop :right="100" :bottom="100" />
</template>

<script lang="ts" setup>
const open = useState<boolean>('toggle', () => false)
function toggle() {
  open.value = !open.value
} 
</script>
