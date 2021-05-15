export default function({ $auth }) {
  $auth.onError((error, name, endpoint) => {
    console.error('auth error --> ', name, error, endpoint)
  });

  $auth.onRedirect((to, from) => {
    console.error('auth redirect error -->', to, from)
  })
}
