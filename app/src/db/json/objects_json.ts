import { ObjectSchema } from "../entity/ObjectSchema";

export class ObjectItemBuilder {

    prepareFinancialObject(): ObjectSchema {
        return new ObjectSchema(
            "1",
            "Financial Calculators",
            "financial",
            "Calculate loans, EMIs, investments, interest rates, savings, and other finance-related metrics with ease.",
            "AttachMoneyOutlinedIcon",
            "#0070f3",
            "0"
        );
    }

    prepareHealthObject(): ObjectSchema {
        return new ObjectSchema(
            "2",
            "Health & Fitness Calculators",
            "health",
            "Track your health using BMI, BMR, calorie, heart rate, and body fat calculators for a healthier lifestyle.",
            "FavoriteBorderOutlinedIcon",
            "#28a745",
            "0"
        );
    }
    prepareMathObject(): ObjectSchema {
        return new ObjectSchema(
            "3",
            "Math & Geometry Calculators",
            "math",
            "Solve equations, geometry problems, percentages, algebra, and trigonometry instantly with math tools.",
            "CalculateOutlinedIcon",
            "#f59e0b",
            "0"
        );
    }

    prepareOtherObject(): ObjectSchema {
        return new ObjectSchema(
            "4",
            "Other Useful Calculators",
            "other",
            "Explore a wide range of utility tools like age, date, unit conversion, and time difference calculators.",
            "MoreHorizOutlinedIcon",
            "#8b5cf6",
            "0"
        );
    }

    getObjectsJson(): ObjectSchema[] {

        const objects: ObjectSchema[] = [];
        objects.push(
            this.prepareFinancialObject(),
            this.prepareHealthObject(),
            this.prepareMathObject(),
            this.prepareOtherObject()
        );
        return objects;
    }

}
