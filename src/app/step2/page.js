export default function Test() {
    return (
        <main style={{
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <div style={{
                height: '250px',
                borderRadius: '50%',
                width: '250px',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#F28C38',
                boxShadow: '0px 0px 17px 1px #f28c38'
            }}>
                <p style={{
                    fontSize: '1.5rem',
                    fontWeight: '700'
                }}>The Sun</p>
            </div>
        </main>
    )
}