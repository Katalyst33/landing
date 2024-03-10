import Image from "next/image";

function Page() {
    return (
        <div>
            <h1>Branding</h1>

            <Image
                width={500}
                height={500}
                className={`w-auto h-96`}
                priority={true}
                alt={`H2o`}
                src={`${process.env.serverAssetsUrl}/logos/h2o.svg`}
            />
        </div>
    );
}

export default Page;
