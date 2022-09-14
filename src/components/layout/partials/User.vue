<template>
  <ul class="menu-links">
    <li class="nav-link">
      <router-link :to="{ name: 'Dashboard' }">

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
      <router-link :to="{ name: 'Purchase' }">

        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.409 22.246L13.874 15H26.5C27.151 15 27.628 15.611 27.47 16.243L26.122 21.635C25.917 22.454 25.221 23.056 24.381 23.14L17.565 23.822C16.549 23.923 15.62 23.244 15.409 22.246Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M13.874 15L13.224 12H11.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M25.109 27.2668C24.907 27.2668 24.743 27.4308 24.745 27.6328C24.745 27.8348 24.909 27.9988 25.111 27.9988C25.313 27.9988 25.477 27.8348 25.477 27.6328C25.476 27.4308 25.312 27.2668 25.109 27.2668" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16.697 27.2663C16.495 27.2663 16.331 27.4303 16.333 27.6323C16.331 27.8353 16.496 27.9993 16.698 27.9993C16.9 27.9993 17.064 27.8353 17.064 27.6333C17.064 27.4303 16.9 27.2663 16.697 27.2663" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        
        <div class="text nav-text">Purchase</div>

      </router-link>
    </li>
    <li class="nav-link">
      <router-link :to="{ name: 'Wallet' }">

        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M28 23.5H26C24.895 23.5 24 22.605 24 21.5V21.5C24 20.395 24.895 19.5 26 19.5H28C28.552 19.5 29 19.948 29 20.5V22.5C29 23.052 28.552 23.5 28 23.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M28 19.5V16.5C28 15.395 27.105 14.5 26 14.5H12.5C11.672 14.5 11 13.828 11 13V13C11 12.172 11.672 11.5 12.5 11.5H25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M28 23.5V26.5C28 27.605 27.105 28.5 26 28.5H13C11.895 28.5 11 27.605 11 26.5V13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        
        <div class="text nav-text">Wallet</div>

      </router-link>
    </li>
    <li class="nav-link">
      <router-link :to="{ name: 'Comissions' }">

        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26 25L28 27L26 29" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M23 27H28" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M19.9899 16.9757V16.0009" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M19.9899 23V24" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18.2774 22.2856C18.5286 22.7226 18.9921 22.9942 19.4961 22.9995H20.5825C21.2973 23.0078 21.9037 22.4768 21.9899 21.7671C22.076 21.0575 21.6143 20.3968 20.9183 20.2338L19.0675 19.7628C18.3202 19.5802 17.8601 18.8291 18.0368 18.0804C18.1803 17.4455 18.7464 16.996 19.3974 17H20.4837C20.9882 17.0046 21.4524 17.2763 21.7034 17.714" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M28.7676 22C28.9207 21.3443 28.9987 20.6733 29 20C29 15.0294 24.9706 11 20 11C15.0294 11 11 15.0294 11 20C11 24.9706 15.0294 29 20 29" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        
        <div class="text nav-text">Comissions</div>

      </router-link>
    </li>
    <li class="nav-link">
      <router-link :to="{ name: 'Staking' }">

        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9975 29.0033H11.9967C11.4442 29.0031 10.9964 28.5553 10.9962 28.0029V22.0004C10.9964 21.448 11.4442 21.0002 11.9967 21H13.9975C14.5499 21.0002 14.9977 21.448 14.9979 22.0004V28.0029C14.9977 28.5553 14.5499 29.0031 13.9975 29.0033V29.0033Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M21.0004 25.0021H22.9612C23.3942 25.0023 23.8155 24.8619 24.1617 24.6019L26.5787 22.7892C27.1822 22.3369 28.0263 22.3971 28.5596 22.9302V22.9302C28.844 23.2143 29.0038 23.5997 29.0038 24.0017C29.0038 24.4036 28.844 24.7891 28.5596 25.0731L26.4857 27.147C25.9269 27.7055 25.2155 28.0863 24.4409 28.2414L21.5096 28.8277C20.9285 28.9439 20.3288 28.9296 19.7539 28.7857L17.1028 28.1234C16.7859 28.0435 16.4602 28.0032 16.1334 28.0033H14.9979" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M21.0004 25.0017H22.486C22.888 25.0018 23.2736 24.8421 23.5579 24.5579C23.8421 24.2736 24.0018 23.888 24.0017 23.486V23.1829C24.0018 22.4877 23.5287 21.8817 22.8542 21.7133L20.5612 21.1401C20.1886 21.0471 19.8059 21 19.4218 21V21C18.4941 20.9997 17.5873 21.2744 16.8157 21.7893L14.9979 23.0008" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M27.2708 14.7286C28.2475 15.7054 28.2475 17.2889 27.2708 18.2656C26.2941 19.2424 24.7105 19.2424 23.7338 18.2656C22.7571 17.2889 22.7571 15.7054 23.7338 14.7286C24.2028 14.2596 24.839 13.9961 25.5023 13.9961C26.1656 13.9961 26.8018 14.2596 27.2708 14.7286" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.9313 14.0436C14.3528 13.4651 14.3528 12.5271 14.9313 11.9486L16.4514 10.4285C17.03 9.84996 17.9679 9.84996 18.5464 10.4285L20.0666 11.9486C20.6451 12.5271 20.6451 13.4651 20.0666 14.0436L18.5464 15.5637C17.9679 16.1422 17.03 16.1422 16.4514 15.5637L14.9313 14.0436Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        
        <div class="text nav-text">Staking</div>

      </router-link>
    </li>
    <li class="nav-link">
      <router-link :to="{ name: 'Calculator' }">

        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10.9962" y="10.9961" width="18.0075" height="18.0075" rx="3.6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14.2476 25.751L16.7486 23.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16.7486 25.751L14.2476 23.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M23.0013 15.4963H26.0025" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M23.0013 23.1506H26.0025" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M23.0013 25.8518H26.0025" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M20 10.9961V29.0036" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10.9962 19.9983H29.0037" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M22.7011 10.9963H17.2989" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M22.7011 29.0022H17.2989" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10.9962 21.8007V18.1992" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M29.0037 21.8007V18.1992" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M13.9975 15.4963H16.9987" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15.4981 16.9973V13.9961" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        
        <div class="text nav-text">Calculator</div>

      </router-link>
    </li>
    <li class="nav-link">
      <router-link :to="{ name: 'Swap' }">

        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.0017 9.99414L22.0008 11.995L24.0017 13.9958" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M28.0033 11.9963H22.0008" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M29.0037 19.9997C29.0029 18.6104 28.6787 17.2404 28.0568 15.998" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M17.9992 11.2266C13.9041 12.1591 10.9981 15.7996 10.9962 19.9995" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15.9983 30.0036L17.9992 28.0028L15.9983 26.002" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11.9967 28.0022H17.9992" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10.9963 20C10.9971 21.3893 11.3213 22.7593 11.9432 24.0017" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M22.0008 28.7729C26.0959 27.8404 29.0019 24.1999 29.0037 20" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0606 16.4374L23.562 18.9381C23.8435 19.2195 24.0017 19.6012 24.0017 19.9992C24.0017 20.3972 23.8437 20.7789 23.5623 21.0603L21.0616 23.5617C20.7802 23.8432 20.3986 24.0014 20.0006 24.0014C19.6026 24.0014 19.2208 23.8434 18.9394 23.562L16.438 21.0613C16.1565 20.78 15.9983 20.3983 15.9983 20.0003C15.9983 19.6023 16.1563 19.2206 16.4377 18.9391L18.9384 16.4377C19.2198 16.1563 19.6014 15.998 19.9994 15.998C20.3974 15.998 20.7792 16.156 21.0606 16.4374V16.4374Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        
        <div class="text nav-text">Swap</div>

      </router-link>
    </li>
    <li class="nav-link">
      <router-link :to="{ name: 'Team', params: { username: user.username } }">

        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28.7925 17.5242C29.5825 18.3142 29.5825 19.5951 28.7925 20.3851C28.0025 21.1751 26.7216 21.1751 25.9315 20.3851C25.1415 19.5951 25.1415 18.3142 25.9315 17.5242C26.7216 16.7341 28.0025 16.7341 28.7925 17.5242" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M22.2026 13.9124C23.4191 15.1288 23.4191 17.1011 22.2026 18.3176C20.9861 19.5341 19.0138 19.5341 17.7973 18.3176C16.5808 17.1012 16.5808 15.1289 17.7973 13.9124C19.0138 12.6959 20.9861 12.6959 22.2026 13.9124" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14.0685 17.5242C14.8585 18.3142 14.8585 19.5951 14.0685 20.3851C13.2785 21.1751 11.9976 21.1751 11.2075 20.3851C10.4175 19.5951 10.4175 18.3142 11.2075 17.5242C11.9976 16.7341 13.2785 16.7341 14.0685 17.5242" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M31 27.0003V25.9043C31 24.5233 29.881 23.4043 28.5 23.4043H27.699" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9 27.0003V25.9043C9 24.5233 10.119 23.4043 11.5 23.4043H12.301" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M25.339 26.9994V25.3984C25.339 23.4654 23.772 21.8984 21.839 21.8984H18.16C16.227 21.8984 14.66 23.4654 14.66 25.3984V26.9994" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        
        <div class="text nav-text">Team</div>

      </router-link>
    </li>
    <!-- <li class="nav-link">
      <router-link :to="{ name: 'Packages' }">

        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28.7923 17.5236C29.5824 18.3136 29.5824 19.5945 28.7923 20.3845C28.0023 21.1745 26.7214 21.1745 25.9314 20.3845C25.1414 19.5945 25.1414 18.3136 25.9314 17.5236C26.7214 16.7335 28.0023 16.7335 28.7923 17.5236" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M22.2024 13.9124C23.4189 15.1288 23.4189 17.1011 22.2024 18.3176C20.9859 19.5341 19.0136 19.5341 17.7971 18.3176C16.5806 17.1012 16.5806 15.1289 17.7971 13.9124C19.0136 12.6959 20.9859 12.6959 22.2024 13.9124" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M14.0687 17.5236C14.8587 18.3136 14.8587 19.5945 14.0687 20.3845C13.2787 21.1745 11.9978 21.1745 11.2078 20.3845C10.4177 19.5945 10.4177 18.3136 11.2078 17.5236C11.9978 16.7335 13.2787 16.7335 14.0687 17.5236" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M31.0002 27.0001V25.9041C31.0002 24.5231 29.8812 23.4041 28.5002 23.4041H27.6992" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M9 27.0001V25.9041C9 24.5231 10.119 23.4041 11.5 23.4041H12.301" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M25.3392 27V25.399C25.3392 23.466 23.7722 21.899 21.8392 21.899H18.1602C16.2272 21.899 14.6602 23.466 14.6602 25.399V27" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        
        <div class="text nav-text">Packages</div>

      </router-link>
    </li> -->
    <!-- <li class="nav-link">
      <router-link :to="{ name: 'Academy' }">

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
    <!-- <li class="nav-link">
      <router-link :to="{ name: 'Streaming' }">

        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 16.5V18.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M22.667 17.667V20.422C22.667 20.75 22.511 21.056 22.241 21.243C21.789 21.555 21.004 21.967 20.006 21.967C19.008 21.967 18.218 21.554 17.763 21.243C17.491 21.057 17.334 20.75 17.334 20.42V17.667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M26.429 25H13.571C12.151 25 11 23.849 11 22.429V13.571C11 12.151 12.151 11 13.571 11H26.428C27.849 11 29 12.151 29 13.571V22.428C29 23.849 27.849 25 26.429 25Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M22 25L22.5 29" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M18 25L17.5 29" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M16.1396 29H23.8596" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15 16.5L20 19L25 16.5L20 14L15 16.5Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        
        <div class="text nav-text">Streaming</div>

      </router-link>
    </li> -->
    <li class="nav-link">
      <router-link :to="{ name: 'Signal' }">

        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14 27H12C11.448 27 11 26.552 11 26V23C11 22.448 11.448 22 12 22H14C14.552 22 15 22.448 15 23V26C15 26.552 14.552 27 14 27Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M21 27H19C18.448 27 18 26.552 18 26V19C18 18.448 18.448 18 19 18H21C21.552 18 22 18.448 22 19V26C22 26.552 21.552 27 21 27Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M28 27H26C25.448 27 25 26.552 25 26V14C25 13.448 25.448 13 26 13H28C28.552 13 29 13.448 29 14V26C29 26.552 28.552 27 28 27Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        
        <div class="text nav-text">Signal</div>

      </router-link>
    </li>
    <li class="nav-link">
      <a href="https://button.amocrm.com/vwdrlv" target="_blanl">

        <img src="@/assets/icons/bot.png" alt="" class="w-100" style="max-width:40px">
        
        <div class="text nav-text">Support</div>
        </a>
    </li>
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