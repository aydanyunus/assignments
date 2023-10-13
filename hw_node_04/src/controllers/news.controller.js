import news from '../data.js';

const getNews = ((req, res) => {
    const { page, size } = req.query

    try {

        if (!page || !size || isNaN(page) && isNaN(size)) {
            return res.status(400).json({ error: "Invalid page or size parameters" });
        }
        const startIndex = (page - 1) * size;
        const endIndex = page * size;
        const data = news.slice(startIndex, endIndex);

        if (data) {
            res.status(200).json(data);
        } else {
            res.status(200).json([]);
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
})

const getNewsByID = ((req, res) => {
    const { id } = req.params
    try {
        if (isNaN(id)) {
            return res.status(404).json('ID not found');

        }
        const selectedData = news.find((data) => data.id === +id)

        if (selectedData) {
            res.status(200).json(selectedData);

        } else {
            res.status(404).json('News post not found');
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
})

const editNews = ((req, res) => {
    const { id } = req.params
    if (!id) {
        return res.status(400).json({ error: 'Invalid ID' });
    }
    const selectedNewsIndex = news.findIndex((data) => data.id === +id);
    if (selectedNewsIndex !== -1) {

        const editedNews = {
            ...news[selectedNewsIndex],
            ...req.body
        };

        news.splice(selectedNewsIndex, 1, editedNews);
        res.json(editedNews);
    }
    else {
        res.status(404).json({ error: 'Not found' });
    }

})

const addNews = ((req, res) => {
    if (!req.body) {
        return res.status(400).json({ error: 'Request body is missing.' });
    }
    const id = news[news.length - 1].id + 1;

    news.push({ ...req.body, id })
    res.json({ message: 'Added successfully' });

})

const deleteNews = ((req, res) => {
    const id = req.params.id;
    try {
        if (!id || isNaN(id)) {
            return res.status(404).json({ message: 'ID not found' });
        }

        const selectedNewsIndex = news.findIndex((data) => data.id === +id);

        if (selectedNewsIndex !== -1) {
            news.splice(selectedNewsIndex, 1);
            return res.status(200).json({ message: 'deleted successfully' });
        }
        else {
            res.status(404).json({ message: 'Not found' });
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
})

export {
    getNews,
    getNewsByID,
    editNews,
    addNews,
    deleteNews
}