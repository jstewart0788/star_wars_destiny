import { StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
    flexRow:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    flexCol: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center'
    },
    image: {
        maxHeight: 300
    }
});

export default styles;