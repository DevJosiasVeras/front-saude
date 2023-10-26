interface UserProps {
  name: string;
  image?: string;
}

export default function User({ name, image }: UserProps) {	
  return (
    <div>
      <div className="flex items-center justify-center">
        {image ? (
            <img src={image} alt="user" className="w-12 h-12 cursor-pointer rounded-full" />
        ) : (
            <img src={'/user.svg'} alt="user" className="w-12 h-12 cursor-pointer rounded-full" />
        )  
        }
        <h1 className="text-2xl text-violet-900 ml-2">{name}</h1>
      </div>
    </div>
  )
}