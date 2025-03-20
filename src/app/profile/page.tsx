import {
    Card,
    // CardContent,
    // CardDescription,
    // CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import Image from 'next/image'
export default function Profile() {
    return (
        <div className="w-[100%] h-[100vh] bg-[#043262] p-24">
            <Card className="w-[100%] h-[250px] p-8">
                <CardHeader>
                    <CardTitle>
                        <div className="flex justify-between">
                            <div>
                                <div className="text-[32px] font-medium">Mr. Test Eiei</div>
                                <div className="text-[18px] mt-4">Bangna Bangkok</div>
                                <div className="text-[18px] mt-4">test@gmail.com</div>
                            </div>
                            <div>
                                <Image
                                    src="https://dummyimage.com/150x200/000/fff&text=TE"
                                    alt="Logo"
                                    width={150}
                                    height={200}
                                />
                            </div>
                        </div>
                    </CardTitle>
                </CardHeader>
            </Card>
        </div>
    )
}
