import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const RssForm = ({ existingUrls, addUrl }) => {
    const formik = useFormik({
        initialValues: {
            url: '',
        },
        validationSchema: Yup.object({
            url: Yup.string()
                .url('Введите корректный URL')
                .required('URL обязателен')
                .test('is-unique', 'Этот URL уже добавлен', value => !existingUrls.includes(value)),
        }),
        onSubmit: (values, { resetForm }) => {
            addUrl(values.url);
            resetForm();
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <input
                type="text"
                name="url"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.url}
                style={{
                    borderColor: formik.touched.url && formik.errors.url ? 'red' : null,
                }}
                autoFocus
            />
            {formik.touched.url && formik.errors.url ? <div style={{ color: 'red' }}>{formik.errors.url}</div> : null}
            <button type="submit">Добавить</button>
        </form>
    );
};

export default RssForm;