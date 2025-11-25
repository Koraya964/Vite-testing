const user = {
    name : 'Julien',
    imageUrl : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTucSkXaNJ3kNHGgTP5cGoXn2ohZcpRaxOOzA&s`,
    imageSize : 90,
};

export default function Profile(){
    return(
        <>
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <img className="avatar" 
            src = {user.imageUrl}
            alt={`Photo de ` + user.name}
            style={{
            width: user.imageSize,
            height: user.imageSize}}>
            </img>
        </div>
        </>
        
    )
}