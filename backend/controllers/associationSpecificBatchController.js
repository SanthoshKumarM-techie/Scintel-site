import sequelize from "../config/database.js";

export const getAssociationBatchDetails = async (req, res) => {

    try {

        const { id } = req.params;

        const [batchInfo] = await sequelize.query(`
            SELECT batch_id, batch_year, title, description, image_url
            FROM association_batch
            WHERE batch_year = :id OR CAST(batch_id AS TEXT) = :id
            ORDER BY CASE WHEN batch_year = :id THEN 0 ELSE 1 END
            LIMIT 1
        `, {
            replacements: { id }
        });

        if (!batchInfo[0]) {
            return res.status(404).json({
                message: "Batch not found"
            });
        }

        const [members] = await sequelize.query(`
            SELECT
                member_id,
                phone_number,
                phone_number AS register_number,
                name,
                role,
                year,
                batch_year
            FROM association_members
            WHERE batch_year = :batch_year
            ORDER BY name
        `, {
            replacements: { batch_year: batchInfo[0].batch_year }
        });

        res.json({
            batch_info: batchInfo[0] || null,
            members: members || []
        });

    } catch (error) {

        console.error("Error fetching association batch details:", error);
        res.status(500).json({ error: "Internal Server Error" });

    }

};
