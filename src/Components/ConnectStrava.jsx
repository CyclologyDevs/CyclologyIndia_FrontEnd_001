import React, { useEffect } from 'react'
// import StravaIcon from '../images/strava-logo.png'

function ConnectStrava() {

  // const URL = new URLSearchParams(window.location.search);
  // console.log("\nCode => " + URL.get('code'));
  // const code = URL.get('code');
  // console.log(code)

  // const [email, setEmail] = useState('');
  // console.log(email);

  const handleSubmit = (e) => {

    // const data = { code };
    // fetch('http://153.92.5.193:3600/connect_strava', {
    //   method: 'POST',
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data)
    // }).then(() => {
    //   console.log('Data Send');
    // })
  }

  useEffect(() => {
    handleSubmit()
  })


  return (
    <div className='mt-20 md:mx-96 mb-20'>
      <div className='p-10 flex-box border box-border rounded-xl md:mx-20 mx-10'>
        <h1 className='text-center text-4xl text-stone-400 font-serif mb-20'>My Strava</h1>
        <a href='https://www.strava.com/oauth/authorize?client_id=76784&response_type=code&redirect_uri=http://127.0.0.1:3000/profileStrava&approval_prompt=force&scope=read,read_all,activity:read_all'>
          <button className="flex mx-auto font-serif text-white py-2.5 px-4 bg-orange-600 rounded-full md:text-lg text-sm hover:bg-transparent hover:shadow-md hover:shadow-orange-600">Connect with<span className='pl-2 font-bold'>STRAVA</span></button>
        </a>
        <p className='text-center text-white mt-28 font-serif'>Power by <span className='pl-2 font-bold text-orange-600'>STRAVA</span></p>
      </div>
    </div>
  )
}

export default ConnectStrava