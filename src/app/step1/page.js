export default function Test() {

    const styles = {

        main: {
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center'
        },

        div: {
            height: '250px',
            borderRadius: '50%',
            width: '250px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#F28C38',
            boxShadow: '0px 0px 17px 1px #f28c38'
        },

        p: {
            fontSize: '1.5rem',
            fontWeight: '700'
        }
    }
    
    return (
        <main style={styles.main}>
            <div style={styles.div}>
                <p style={styles.p}>The Sun</p>
            </div>
        </main>
    )
}

