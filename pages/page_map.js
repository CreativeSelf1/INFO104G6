import MapUi from '../components/mapUI'
export async function getServerSideProps(context) {
    const res = await fetch("http://localhost:3000/data/inf.json");
    const data = await res.json();

    if (!data) {
        return {
            notFound: true,
        };
    }

    return {
        props: { data },
    };
}

export default function MapUI2({ data }) {
    return (
        <div className="container">
            <MapUi></MapUi>
        </div>
    );
}
