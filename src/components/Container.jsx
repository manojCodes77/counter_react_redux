const Container = ({children}) => {
    return (
        <div className="card dark:bg-gray-800 m-3 rounded-2xl">
            <div className="card-body dark:text-white">
                {children}
            </div>
        </div>
    )
}
export default Container;