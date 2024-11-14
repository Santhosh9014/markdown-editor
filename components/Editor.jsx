import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';
import PropTypes from "prop-types";

export default function Editor({ currentNote, updateNote }) {
    return (
        <section className="pane editor">
            <MDEditor
                value={currentNote.body}
                onChange={updateNote}
                preview="edit"
                height="80vh"
                className="md-editor"
                previewOptions={{
                    rehypePlugins: [[rehypeSanitize]],
                }}
                textareaProps={{
                    placeholder: "Type your markdown here..."
                }}
            />
        </section>
    );
}

Editor.propTypes = {
    currentNote: PropTypes.shape({
        body: PropTypes.string.isRequired,
    }).isRequired,
    updateNote: PropTypes.func.isRequired,
};