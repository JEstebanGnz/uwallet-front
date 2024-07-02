/** @type {import('next').NextConfig} */

// this simply tests the redirecting of the root path (source)
module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/auth/login',
          permanent: true,
        },
        {
          source: '/googleLoginRedirect',
          destination: 'http://localhost:8000/api/auth/google/redirect',
          permanent: false,
          basePath: false
        },
      ]
    },
    
    env:{
        apiUrl: 'http://localhost:8000/',
        googleRedirect: 'http://localhost:8000/api/auth/google/redirect'
    }

  };


