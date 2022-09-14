<template>
  <ul class="menu-links">
    <li class="nav-link">
      <router-link :to="{ name: 'Manage-Dashboard' }">

        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.75 17.75H13C11.895 17.75 11 16.855 11 15.75V13C11 11.895 11.895 11 13 11H15.75C16.855 11 17.75 11.895 17.75 13V15.75C17.75 16.855 16.855 17.75 15.75 17.75Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M27 17.75H24.25C23.145 17.75 22.25 16.855 22.25 15.75V13C22.25 11.895 23.145 11 24.25 11H27C28.105 11 29 11.895 29 13V15.75C29 16.855 28.105 17.75 27 17.75Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.75 29H13C11.895 29 11 28.105 11 27V24.25C11 23.145 11.895 22.25 13 22.25H15.75C16.855 22.25 17.75 23.145 17.75 24.25V27C17.75 28.105 16.855 29 15.75 29Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M27 29H24.25C23.145 29 22.25 28.105 22.25 27V24.25C22.25 23.145 23.145 22.25 24.25 22.25H27C28.105 22.25 29 23.145 29 24.25V27C29 28.105 28.105 29 27 29Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        
        <div class="text nav-text">Dashboard</div>

      </router-link>
    </li>
    <li class="nav-link">
      <router-link :to="{ name: 'Manage-Users' }">

        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="11" width="16" height="18" rx="2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M16 25H24" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.2152 14.9878C19.3626 14.6891 19.6668 14.5 19.9999 14.5C20.333 14.5 20.6372 14.6891 20.7845 14.9878L21.2297 15.8903C21.3572 16.1486 21.6035 16.3277 21.8886 16.3691L22.8844 16.5138C23.2139 16.5618 23.4877 16.7926 23.5906 17.1092C23.6936 17.4259 23.6079 17.7735 23.3695 18.006L22.6486 18.7092C22.4425 18.9102 22.3485 19.1998 22.3972 19.4835L22.5673 20.4751C22.6235 20.8033 22.4886 21.1351 22.2192 21.3308C21.9498 21.5266 21.5927 21.5524 21.2979 21.3975L20.4069 20.9293C20.1521 20.7954 19.8477 20.7954 19.5928 20.9293L18.7019 21.3975C18.4071 21.5524 18.0499 21.5266 17.7805 21.3308C17.5111 21.1351 17.3762 20.8033 17.4325 20.4751L17.6026 19.4835C17.6512 19.1998 17.5572 18.9102 17.3511 18.7092L16.6302 18.006C16.3919 17.7735 16.3062 17.4259 16.4091 17.1092C16.512 16.7926 16.7858 16.5618 17.1153 16.5138L18.1112 16.3691C18.3962 16.3277 18.6426 16.1486 18.77 15.8903L19.2152 14.9878Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        
        <div class="text nav-text">Users</div>

      </router-link>
    </li>
    <li class="nav-link">
      <router-link :to="{ name: 'Manage-Purchases' }">

        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="11" width="16" height="18" rx="2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M16 25H24" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.2152 14.9878C19.3626 14.6891 19.6668 14.5 19.9999 14.5C20.333 14.5 20.6372 14.6891 20.7845 14.9878L21.2297 15.8903C21.3572 16.1486 21.6035 16.3277 21.8886 16.3691L22.8844 16.5138C23.2139 16.5618 23.4877 16.7926 23.5906 17.1092C23.6936 17.4259 23.6079 17.7735 23.3695 18.006L22.6486 18.7092C22.4425 18.9102 22.3485 19.1998 22.3972 19.4835L22.5673 20.4751C22.6235 20.8033 22.4886 21.1351 22.2192 21.3308C21.9498 21.5266 21.5927 21.5524 21.2979 21.3975L20.4069 20.9293C20.1521 20.7954 19.8477 20.7954 19.5928 20.9293L18.7019 21.3975C18.4071 21.5524 18.0499 21.5266 17.7805 21.3308C17.5111 21.1351 17.3762 20.8033 17.4325 20.4751L17.6026 19.4835C17.6512 19.1998 17.5572 18.9102 17.3511 18.7092L16.6302 18.006C16.3919 17.7735 16.3062 17.4259 16.4091 17.1092C16.512 16.7926 16.7858 16.5618 17.1153 16.5138L18.1112 16.3691C18.3962 16.3277 18.6426 16.1486 18.77 15.8903L19.2152 14.9878Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        
        <div class="text nav-text">Purchases</div>

      </router-link>
    </li>
    <li class="nav-link">
      <router-link :to="{ name: 'Manage-Comissions' }">

        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="11" width="16" height="18" rx="2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M16 25H24" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.2152 14.9878C19.3626 14.6891 19.6668 14.5 19.9999 14.5C20.333 14.5 20.6372 14.6891 20.7845 14.9878L21.2297 15.8903C21.3572 16.1486 21.6035 16.3277 21.8886 16.3691L22.8844 16.5138C23.2139 16.5618 23.4877 16.7926 23.5906 17.1092C23.6936 17.4259 23.6079 17.7735 23.3695 18.006L22.6486 18.7092C22.4425 18.9102 22.3485 19.1998 22.3972 19.4835L22.5673 20.4751C22.6235 20.8033 22.4886 21.1351 22.2192 21.3308C21.9498 21.5266 21.5927 21.5524 21.2979 21.3975L20.4069 20.9293C20.1521 20.7954 19.8477 20.7954 19.5928 20.9293L18.7019 21.3975C18.4071 21.5524 18.0499 21.5266 17.7805 21.3308C17.5111 21.1351 17.3762 20.8033 17.4325 20.4751L17.6026 19.4835C17.6512 19.1998 17.5572 18.9102 17.3511 18.7092L16.6302 18.006C16.3919 17.7735 16.3062 17.4259 16.4091 17.1092C16.512 16.7926 16.7858 16.5618 17.1153 16.5138L18.1112 16.3691C18.3962 16.3277 18.6426 16.1486 18.77 15.8903L19.2152 14.9878Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        
        <div class="text nav-text">Comissions</div>

      </router-link>
    </li>
    <li class="nav-link">
      <router-link :to="{ name: 'Manage-Staking' }">

        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="11" width="16" height="18" rx="2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M16 25H24" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.2152 14.9878C19.3626 14.6891 19.6668 14.5 19.9999 14.5C20.333 14.5 20.6372 14.6891 20.7845 14.9878L21.2297 15.8903C21.3572 16.1486 21.6035 16.3277 21.8886 16.3691L22.8844 16.5138C23.2139 16.5618 23.4877 16.7926 23.5906 17.1092C23.6936 17.4259 23.6079 17.7735 23.3695 18.006L22.6486 18.7092C22.4425 18.9102 22.3485 19.1998 22.3972 19.4835L22.5673 20.4751C22.6235 20.8033 22.4886 21.1351 22.2192 21.3308C21.9498 21.5266 21.5927 21.5524 21.2979 21.3975L20.4069 20.9293C20.1521 20.7954 19.8477 20.7954 19.5928 20.9293L18.7019 21.3975C18.4071 21.5524 18.0499 21.5266 17.7805 21.3308C17.5111 21.1351 17.3762 20.8033 17.4325 20.4751L17.6026 19.4835C17.6512 19.1998 17.5572 18.9102 17.3511 18.7092L16.6302 18.006C16.3919 17.7735 16.3062 17.4259 16.4091 17.1092C16.512 16.7926 16.7858 16.5618 17.1153 16.5138L18.1112 16.3691C18.3962 16.3277 18.6426 16.1486 18.77 15.8903L19.2152 14.9878Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        
        <div class="text nav-text">Staking</div>

      </router-link>
    </li>
    <li class="nav-link">
      <router-link :to="{ name: 'Manage-Swap' }">

        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="11" width="16" height="18" rx="2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M16 25H24" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.2152 14.9878C19.3626 14.6891 19.6668 14.5 19.9999 14.5C20.333 14.5 20.6372 14.6891 20.7845 14.9878L21.2297 15.8903C21.3572 16.1486 21.6035 16.3277 21.8886 16.3691L22.8844 16.5138C23.2139 16.5618 23.4877 16.7926 23.5906 17.1092C23.6936 17.4259 23.6079 17.7735 23.3695 18.006L22.6486 18.7092C22.4425 18.9102 22.3485 19.1998 22.3972 19.4835L22.5673 20.4751C22.6235 20.8033 22.4886 21.1351 22.2192 21.3308C21.9498 21.5266 21.5927 21.5524 21.2979 21.3975L20.4069 20.9293C20.1521 20.7954 19.8477 20.7954 19.5928 20.9293L18.7019 21.3975C18.4071 21.5524 18.0499 21.5266 17.7805 21.3308C17.5111 21.1351 17.3762 20.8033 17.4325 20.4751L17.6026 19.4835C17.6512 19.1998 17.5572 18.9102 17.3511 18.7092L16.6302 18.006C16.3919 17.7735 16.3062 17.4259 16.4091 17.1092C16.512 16.7926 16.7858 16.5618 17.1153 16.5138L18.1112 16.3691C18.3962 16.3277 18.6426 16.1486 18.77 15.8903L19.2152 14.9878Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        
        <div class="text nav-text">Swap</div>

      </router-link>
    </li>
    <li class="nav-link">
      <router-link :to="{ name: 'Team', params: { username: user.username } }">

        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="11" width="16" height="18" rx="2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M16 25H24" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.2152 14.9878C19.3626 14.6891 19.6668 14.5 19.9999 14.5C20.333 14.5 20.6372 14.6891 20.7845 14.9878L21.2297 15.8903C21.3572 16.1486 21.6035 16.3277 21.8886 16.3691L22.8844 16.5138C23.2139 16.5618 23.4877 16.7926 23.5906 17.1092C23.6936 17.4259 23.6079 17.7735 23.3695 18.006L22.6486 18.7092C22.4425 18.9102 22.3485 19.1998 22.3972 19.4835L22.5673 20.4751C22.6235 20.8033 22.4886 21.1351 22.2192 21.3308C21.9498 21.5266 21.5927 21.5524 21.2979 21.3975L20.4069 20.9293C20.1521 20.7954 19.8477 20.7954 19.5928 20.9293L18.7019 21.3975C18.4071 21.5524 18.0499 21.5266 17.7805 21.3308C17.5111 21.1351 17.3762 20.8033 17.4325 20.4751L17.6026 19.4835C17.6512 19.1998 17.5572 18.9102 17.3511 18.7092L16.6302 18.006C16.3919 17.7735 16.3062 17.4259 16.4091 17.1092C16.512 16.7926 16.7858 16.5618 17.1153 16.5138L18.1112 16.3691C18.3962 16.3277 18.6426 16.1486 18.77 15.8903L19.2152 14.9878Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        
        <div class="text nav-text">Team</div>

      </router-link>
    </li>
    <li class="nav-link">
      <router-link :to="{ name: 'Manage-Membership' }">

        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="11" width="16" height="18" rx="2" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M16 25H24" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.2152 14.9878C19.3626 14.6891 19.6668 14.5 19.9999 14.5C20.333 14.5 20.6372 14.6891 20.7845 14.9878L21.2297 15.8903C21.3572 16.1486 21.6035 16.3277 21.8886 16.3691L22.8844 16.5138C23.2139 16.5618 23.4877 16.7926 23.5906 17.1092C23.6936 17.4259 23.6079 17.7735 23.3695 18.006L22.6486 18.7092C22.4425 18.9102 22.3485 19.1998 22.3972 19.4835L22.5673 20.4751C22.6235 20.8033 22.4886 21.1351 22.2192 21.3308C21.9498 21.5266 21.5927 21.5524 21.2979 21.3975L20.4069 20.9293C20.1521 20.7954 19.8477 20.7954 19.5928 20.9293L18.7019 21.3975C18.4071 21.5524 18.0499 21.5266 17.7805 21.3308C17.5111 21.1351 17.3762 20.8033 17.4325 20.4751L17.6026 19.4835C17.6512 19.1998 17.5572 18.9102 17.3511 18.7092L16.6302 18.006C16.3919 17.7735 16.3062 17.4259 16.4091 17.1092C16.512 16.7926 16.7858 16.5618 17.1153 16.5138L18.1112 16.3691C18.3962 16.3277 18.6426 16.1486 18.77 15.8903L19.2152 14.9878Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        
        <div class="text nav-text">Membership</div>

      </router-link>
    </li>
    <!-- <li class="nav-link">
      <router-link :to="{ name: 'Manage-Academy' }">

        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 16.5V18.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M22.667 17.667V20.422C22.667 20.75 22.511 21.056 22.241 21.243C21.789 21.555 21.004 21.967 20.006 21.967C19.008 21.967 18.218 21.554 17.763 21.243C17.491 21.057 17.334 20.75 17.334 20.42V17.667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M26.429 25H13.571C12.151 25 11 23.849 11 22.429V13.571C11 12.151 12.151 11 13.571 11H26.428C27.849 11 29 12.151 29 13.571V22.428C29 23.849 27.849 25 26.429 25Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M22 25L22.5 29" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M18 25L17.5 29" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M16.1396 29H23.8596" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15 16.5L20 19L25 16.5L20 14L15 16.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        
        <div class="text nav-text">Academy</div>

      </router-link>
    </li> -->
    <li class="nav-link">
      <router-link :to="{ name: 'Manage-Signal' }">

        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14 27H12C11.448 27 11 26.552 11 26V23C11 22.448 11.448 22 12 22H14C14.552 22 15 22.448 15 23V26C15 26.552 14.552 27 14 27Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M21 27H19C18.448 27 18 26.552 18 26V19C18 18.448 18.448 18 19 18H21C21.552 18 22 18.448 22 19V26C22 26.552 21.552 27 21 27Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M28 27H26C25.448 27 25 26.552 25 26V14C25 13.448 25.448 13 26 13H28C28.552 13 29 13.448 29 14V26C29 26.552 28.552 27 28 27Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        
        <div class="text nav-text">Signal</div>

      </router-link>
    </li>
    <!-- <li class="nav-link">
      <router-link :to="{ name: 'Manage-Transactions' }">

        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26 25L28 27L26 29" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M23 27H28" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M19.9902 16.9748V16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M19.9902 23V24" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M18.2774 22.2856C18.5286 22.7226 18.9921 22.9942 19.4961 22.9995H20.5825C21.2973 23.0078 21.9037 22.4768 21.9899 21.7671C22.076 21.0575 21.6143 20.3968 20.9183 20.2338L19.0675 19.7628C18.3202 19.5802 17.8601 18.8291 18.0368 18.0804C18.1803 17.4455 18.7464 16.996 19.3974 17H20.4837C20.9882 17.0046 21.4524 17.2763 21.7034 17.714" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M28.7676 22C28.9207 21.3443 28.9987 20.6733 29 20C29 15.0294 24.9706 11 20 11C15.0294 11 11 15.0294 11 20C11 24.9706 15.0294 29 20 29" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        
        <div class="text nav-text">Transactions</div>

      </router-link>
    </li> -->
  </ul>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('auth', ['user'])
  }
}
</script>