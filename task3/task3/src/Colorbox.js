export function Colorbox({ color }) {
    const styles = {
        backgroundColor: color,
        width: "350px",
        height: "24px",
        marginTop: "12px",
        
  };
    return (
        <div style={styles}></div>
    );
}
