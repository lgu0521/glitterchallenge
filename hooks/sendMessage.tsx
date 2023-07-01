type Props = {
    name: string;
    phoneNumber: string;
    class: {
        name: string;
        count: number;
    }[]
}

const sendSms = async (props: Props) => {
    console.log(props)
    const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/sms",
        {
            method: "POST",
            body: JSON.stringify(props)
        }
    );
}

export default sendSms