import React from 'react'
import "./footer.scss"

const Footer = () => {
  return (
    <div className='myFooter'>
    <div className='myfooter myContainer'>
        <div className='FeaturesF'>
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
        </div>
        <div className='FeaturesF'>
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
        </div>
        <div>
            <h3>Subscribe to newsletter</h3>
            <form
                action=""
                className="mx-auto mt-4 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:gap-0"
                >
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="grow rounded border-2 border-gray-300 py-3 px-3 focus:border-emerald-500 focus:outline-none sm:rounded-l-md sm:rounded-r-none sm:border-r-0"
                    placeholder="Email Address"
                />
                <button
                    type="submit"
                    className="rounded bg-emerald-500 px-5 py-4 font-bold text-white sm:rounded-l-none sm:rounded-r-md"
                >
                    Get First Email
                </button>
                </form>

        </div>
    </div>
    </div>
  )
}

export default Footer