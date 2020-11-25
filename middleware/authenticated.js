export default function ({ store, redirect, }) {
  // If the user is not authenticated
  let user = null;
  if (!user) {
    return redirect('/login');
  }
}
