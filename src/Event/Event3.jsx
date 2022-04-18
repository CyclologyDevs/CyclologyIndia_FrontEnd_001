import React, { Component } from 'react'
import Footer from '../Components/Footer'
// import Navbar from '../Components/Navbar'

class Event3 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            isLoading: false,
            isError: false
        }
    }

    //async function
    async componentDidMount() {
        this.setState({ isLoading: true })

        const res = await fetch('http://153.92.5.193:3600/events/event003')
        if (res.ok) {
            const users = await res.json();
            // console.log(users);
            this.setState({ users, isLoading: false })
        } else {
            this.setState({ isError: true, isLoading: false })
        }
    }

    // renderTableHeader = () => {
    //     return Object.keys(this.state.users[0]).map(attr =>
    //         <th className='text-gray-400' key={attr}>{attr.toUpperCase()}</th>
    //     )
    // }

    renderTableRows = () => {
        return this.state.users.map((user, i) => {
            return (
                <tr key={i} className='text-gray-400'>
                    <td className='pt-3 pb-3'>{i + 1}</td>
                    <td>{user.uuid}</td>
                    <td className='pt-3 pb-3'>{user.fname + " " + user.lname}</td>
                    <td className='pt-3 pb-3'>{user.T_Distance / 1000}</td>
                </tr>
            )
        })
    }

    render() {

        const { users, isLoading, isError } = this.state

        if (isLoading) {
            return (
                <div className='bg-gray-800'>

                    <section className="body-font font-serif text-center">
                        <div className="container mx-auto flex px-5 py-24 md:flex-row items-center">
                            <div className="col-lg-6 col-md-6 col-sm-12 p-0 ml-0 md:ml-20">
                                <h2 className="display-3 w-100 text-center my-3 font-bold text-violet-700" style={{ fontFamily: 'Lobster' }}>Loading...</h2>
                            </div>
                        </div>
                    </section>

                    <Footer />
                </div>
            )
        }

        if (isError) {
            return (
                <div className='bg-gray-800'>

                    <section className="body-font font-serif text-center">
                        <div className="container mx-auto flex px-5 py-24 md:flex-row  items-center">
                            <div className="col-lg-6 col-md-6 col-sm-12 p-0 ml-0 md:ml-20">
                                <h2 className="display-3 w-100 text-center my-3 font-bold text-violet-700" style={{ fontFamily: 'Lobster' }}>Error...</h2>
                            </div>
                        </div>
                    </section>

                    <Footer />
                </div>
            )
        }

        return users.length > 0 ? (
            <div className='bg-gray-800'>

                <section className="text-gray-500 body-font font-serif">
                    <div className="container mx-auto flex py-24 md:flex-row items-center">
                        <div className="col-lg-6 col-md-6 col-sm-12 p-0 ml-0 md:ml-20">
                            <h2 className="display-3 text-center my-3 font-bold text-violet-700" style={{ fontFamily: 'Lobster' }}>Scoreboard</h2>
                            <table className="border-2 border-gray-600 table shadow-2xl m-0 rounded-2xl">
                                <thead className='text-white'>
                                    <tr className='text-xs md:text-lg'>
                                        <th scope="col" className='text-white'>S. No.</th>
                                        <th scope="col" className='text-white'>uuid</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Total Distance(K.M.)</th>
                                    </tr>
                                </thead>

                                <tbody style={{ whiteSpace: 'nowrap' }} className='text-xs md:text-lg'>
                                    {this.renderTableRows()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section >

                <Footer />
            </div>
        ) : (
            <div className='bg-gray-800'>

                <section className="body-font font-serif text-center">
                    <h2 className="display-3 w-100 text-center my-3 font-bold text-violet-700" style={{ fontFamily: 'Lobster' }}>Error 404</h2>
                </section>

                <Footer />
            </div>
        )
    }
}

export default Event3