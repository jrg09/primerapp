import { Counter } from "./Counter";

const jrg = {title:'jjj 🏎',msg:'jorge hola'};

const saluda = () => <b>jorge {jrg.msg}</b>;

export const Content = ({subtitle, initial}) => {
    return (
        <>           
            <div id="content">
                <h1>Content Section</h1>
                <p>
                    <code>{JSON.stringify(jrg)}</code>
                </p>
                <p>
                    {saluda()}
                </p>
                <p>
                    subtitulo: {subtitle}
                </p>
                <Counter value={initial}/>
            </div>
        </>
    )
};
